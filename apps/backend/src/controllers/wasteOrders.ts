import prisma from "../config/prisma.config";


import { Request, Response } from 'express';


export const createWastePost = async (req: Request, res: Response) => {
    const { authorId, wasteImage, price , lat , long } = req.body;

    try {
        const wastePost = await prisma.wastePosts.create({
            data: {
                authorId,
                wasteImage,
                price,
                lat,
                long

            },
        });

        return res.status(201).json(wastePost);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating waste post' });
    }
};

export const getWastePosts = async (req: Request, res: Response) => {
    try {
        const wastePosts = await prisma.wastePosts.findMany({
            include: {
                author: true,
                orders: true,
            },
        });

        return res.status(200).json(wastePosts);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching waste posts' });
    }
};

export const incrementViews = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const wastePost = await prisma.wastePosts.update({
            where: { id },
            data: {
                views: {
                    increment: 1,
                },
            },
        });

        return res.status(200).json(wastePost);
    } catch (error) {
        return res.status(500).json({ error: 'Error incrementing views' });
    }
};




// Haversine Formula
const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const toRad = (x: number) => x * Math.PI / 180;

    const R = 6371; 
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon1 - lon2);
    const lat1Rad = toRad(lat1);
    const lat2Rad = toRad(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

export const getNearbyWastePosts = async (req: Request, res: Response) => {
    const { lat, long, maxDistance } = req.query;

    if (!lat || !long) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        const wastePosts = await prisma.wastePosts.findMany({
            where: {
                lat: {
                    not: null
                },
                long: {
                    not: null
                }
            },
            include: {
                author: true,
                orders: true,
            },
        });

        const nearbyPosts = wastePosts.filter(post => {
            if (post.lat && post.long) {
                const distance = haversineDistance(parseFloat(lat as string), parseFloat(long as string), post.lat, post.long);
                return distance <= (parseFloat(maxDistance as string) || 10); 
            }
            return false;
        });

        return res.status(200).json(nearbyPosts);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching nearby waste posts' });
    }
};