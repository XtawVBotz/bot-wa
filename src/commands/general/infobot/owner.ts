import { ICommand } from '@constants'
import { timeFormat } from '@utils/helper.utils'

export default {
    description: 'Owner number',
    category: 'bot-info',
    callback: async ({ msg, client, message }) => {
        const { from, sender } = msg
        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:Pais\n' + 'ORG:Ashoka Uni;\n' + 'TEL;type=CELL;type=VOICE;waid=6285159907432:+62 851 5990 7432\n' + 'END:VCARD'
        return client.sendMessage(
            from,
            {
                contacts: {
                    displayName: 'Xtaw',
                    contacts: [{ vcard }],
                },
                mentions: [sender],
            },
            { quoted: message }
        )
    },
} as ICommand
