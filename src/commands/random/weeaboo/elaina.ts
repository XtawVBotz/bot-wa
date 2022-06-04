import { ICommand } from '@constants/command.constant'
import { getBuffer } from '@utils/helper.utils'
import { lolhuman, footer } from 'config.json'

export default {
    description: 'elaina random',
    category: 'weeaboo-random',
    consume: 3,
    callback: async ({ client, msg, prefix }) => {
        const { from, sender } = msg
        let __buff = await getBuffer(`https://api.lolhuman.xyz/api/random/elaina?apikey=${lolhuman}`)
        return client.sendMessage(from, { image: __buff, jpegThumbnail: __buff, mentions: [sender] })
    },
} as ICommand
