// test('sum 2 + 2', () => {
//     expect(2 + 2).toBe(4)
// });

import { SubmitFeedback } from "./submit-feedback";



describe('Submit Feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedback(
            { create: async () => { } },
            { sendMail: async () => { } }
        )

        await expect(submitFeedback.execute({
            type: "Bug",
            comment: "exemple comment",
            screenshot: "teste.jpg",
        })).resolves.not.toThrow();
    });
});