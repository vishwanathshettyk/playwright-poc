export class CommonUtils {


    async wait(timeout)
    {
        await new Promise(r => setTimeout(r, 10000));
    }
}