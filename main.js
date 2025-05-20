import { Actor } from 'apify';

await Actor.init();

const input = await Actor.getInput();

await Actor.pushData({
    success: true,
    message: `Hello ${input?.name || 'world'} from Apify!`,
});

await Actor.exit();
