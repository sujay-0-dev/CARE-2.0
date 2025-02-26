import { Request, Response } from 'express';
import prisma from '../config/prisma.config';

export const createOrder = async (req: Request, res: Response) => {
    const { wastePostId, userId, quantity } = req.body;

    try {
        
        const wastePost = await prisma.wastePosts.findUnique({
            where: { id: wastePostId },
        });

    
        if (!wastePost) {
            return res.status(404).json({ error: 'Waste post not found' });
        }

       
        const totalPrice = (wastePost.price * quantity).toFixed(2);

       
        const order = await prisma.order.create({
            data: {
                wastePostId,
                userId,
                quantity,
                totalPrice: parseFloat(totalPrice),
            },
        });

        return res.status(201).json(order);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating order' });
    }
};

export const getOrders = async (req: Request, res: Response) => {
    try {
       
        const orders = await prisma.order.findMany({
            include: {
                wastePost: true, 
                user: true,    
            },
        });

        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching orders' });
    }
};
