
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/
/**
 * bio
 */
//% weight=100 color=#0fbc11 icon=""
namespace projectleaf {
    let checkPos = world(3, 0, 31)
    // デバッグ用
    let lockPos = world(-5, -14, 23)
    // デバッグ用
    let putPos = world(-2, -15, 30)

    /**
     * TODO: 生物の種類を調べる
     */
    //% block
    export function BioDetection() {

        if (blocks.testForBlock(REDSTONE_BLOCK, lockPos)) {
            player.say(">>***システムがロックされています***")
            return
        }

        player.say(">>[ニンゲン]種類照合")
        if (blocks.testForBlock(PINK_WOOL, checkPos)) {
            player.say(">>---成功 [哺乳類]---")
            blocks.place(REDSTONE_BLOCK, putPos)
        } else {
            player.say(">>---失敗---")
            player.say(">>***システムを一時ロックします***")
            blocks.place(REDSTONE_BLOCK, lockPos)
        }

    }
}
