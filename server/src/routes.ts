import { NodemailerMailAdapter } from './adapters/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from './prisma/prisma-feedbacks-repository';
import express from 'express';
import { SubmitFeedback } from './services/submit-feedback';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedback = new SubmitFeedback(prismaFeedbackRepository, nodemailerMailAdapter)

    await submitFeedback.execute({
        type,
        comment,
        screenshot,
    })

  
    return res.status(201).send()
})