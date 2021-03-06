namespace SpriteKind {
    export const key = SpriteKind.create()
    export const key2 = SpriteKind.create()
    export const key3 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
f f f f f f f f e f f f f f f f 
e e e e e e e f f f e e e e e e 
e e f e e e e e e e e e e f e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f e e f f f f f f 
e e e e e e e f f f f e e e e e 
e e e e e e e e e e e e e e e e 
e e e f e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_3.destroy()
})
function bad_guy () {
    Villan = sprites.create(img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . 2 e 2 2 2 2 e 2 . f 1 1 
. . . . 2 2 2 e 2 2 e 2 2 d d . . 
. . . d d 2 2 2 e e 2 2 d d f . . 
. . d d 2 2 2 2 e e 2 2 2 . . . . 
. . d . . 2 2 2 e e 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . f f f . . f f f . . . . 
`, SpriteKind.Player)
    Villan.setPosition(400, 600)
    Villan.follow(Carlos, 60)
    Villan.setKind(SpriteKind.Enemy)
}
function main_character () {
    Carlos = sprites.create(img`
. . . . . f f f f f . . . . . . . 
. . . . f f d d d f f . . . . . . 
. . . . f d 1 d 1 d f . . . . . . 
. . . . d d f d f d d . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d f d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . . 
. . . . 5 5 1 1 1 5 5 . . . . . . 
. . . 5 5 5 1 2 1 5 5 5 . . . . . 
. . . 5 . 5 1 2 1 5 . 5 . . . . . 
. . . 5 . 5 1 1 1 5 . d . . . . . 
. . . d . 5 5 5 5 5 . d . . . . . 
. . . . . 8 8 8 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . f f f . f f f . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(Carlos, 70, 70)
    Carlos.setPosition(400, 750)
    Carlos.setKind(SpriteKind.Player)
    scene.cameraFollowSprite(Carlos)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f f f f f . . . . . . 
`, img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 d 5 . . . . . . 
. . . . . . . 5 5 5 d . . . . . . 
. . . . . . . 5 5 5 . d . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . . f f f . . . . . . . 
`, img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 d 5 . . . . . . 
. . . . . . . 5 5 5 d . . . . . . 
. . . . . . . 5 5 5 . d . . . . . 
. . . . . f . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . . . f f . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . 1 1 . 1 f f 1 1 1 1 . . . . 
. . 1 1 f . 1 1 1 1 1 1 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f . f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. 1 1 1 . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 8 8 . . . . . 
. . . . . . . . . . f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . 1 . . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f . . 2 2 2 2 2 2 1 . . . . 
. 1 1 1 f . 2 2 2 2 2 2 2 . . . . 
. 1 1 . d d 2 2 2 2 2 2 2 . . . . 
. 1 . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . d . . . d d d d . . d . . . . 
. . d d . . 5 5 5 5 . d d . . . . 
. . . d d 5 5 5 5 5 5 d . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f 8 8 . . . . . . . 
. . . . . . . . f f . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . d 5 5 5 5 5 5 d . . . . . 
. . . d d . 5 5 5 5 . d d . . . . 
. . . d . . 5 5 5 5 . . d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kays_2.destroy()
})
function background () {
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b e e b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f 
f b e e b b b b b b b b b b b b b b b b b f f b b b b b b b b b b b b b b b b b b b b b b b b f b f 
f b e e 7 e e e e e e e e e e e e e e e b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e 7 e e e e e e e e e e 1 e e e 1 b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e b b b b b b b b b b b b b b e e b f f b e e b b b b b b b b b b b b b b b b b b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b b b b b b b b b b b b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b 1 e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e 1 b f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b b b b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e e e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e 1 e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e 1 e e b b b b b b b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b b b b b b b b b e e b e e e b b b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e b b b e e b f b f 
f b e e b b b b b b b b b b b b b b b b b b b b e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b b b b e e e b f b e e b f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b b b b e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e b b b b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e b f b b b b f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e e e e e e e b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e e e e e e e b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b b b b b b b b b b b b b e e b b b b b b b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b b b b b b b b b b b b b b b b b b b b b b b e e b b b b b b b b b b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.setTile(11, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, true)
    scene.setTile(14, img`
e e f e e e e e e e e e e e e e 
e e e e e e e e e f e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f e f f f f f f f 
e e e f e e e f f f e e e e e e 
e e e e e e e e e e e e e f e e 
e e e f e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
e e f f f f e e e e e e e e e e 
f f f e e f f f f f f f f f f f 
e e e e e e e e e e e e e f e e 
e f e e e e e e e e e e e e e e 
e e e e e e e f e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e f f 
e e e e e f e e e e e e e e e e 
`, false)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Carlos.destroy()
    main_character()
    Villan.follow(Carlos)
})
function key_1 () {
    kays = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    kays.setPosition(500, 400)
    kays.say("Key 1")
    kays.setKind(SpriteKind.key)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kays.destroy()
})
function key_2 () {
    kays_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    kays_2.setPosition(100, 550)
    kays_2.say("Key 2")
    kays_2.setKind(SpriteKind.key2)
}
function Key_unlocks () {
    scene.setTile(7, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, true)
    scene.setTile(1, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f f f f f e e e f f e e e e 
f f e e e e f f f f f e f f f f 
f e e e e e e e e e 3 3 e e e e 
e e e e 3 e e e e e e 3 3 3 e e 
e e e e 3 3 e e e e e e e 3 3 e 
f e e e e 3 3 e e e e e e e e e 
f f f f f f 3 f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e 3 e e e e e e 3 f f f e e e 
f f 3 f f f f 3 3 3 f e f f f f 
e e 3 e e e e e e e e e e e e e 
e e 3 e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
    if (info.score() == 3) {
        scene.setTile(7, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, false)
    }
}
function key_3 () {
    kay_3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_3.setPosition(500, 625)
    kay_3.say("Key 3")
    kay_3.setKind(SpriteKind.key3)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 8 f . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . f f f f . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . f 8 8 . . . . . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . f . 8 8 f f . . . . . . 
. . . . . f f 8 8 . . . . . . . . 
. . . . . . f f . . . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f . f f f . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . f 
. . . . . . 1 1 1 1 1 1 1 . . f 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 f f f . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 1 1 1 . . f . 
. . . . . . 2 2 2 2 2 2 1 . f 1 f 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d 1 1 
. . . . . . 2 2 2 2 2 2 d d f . 1 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f 8 f f f . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . d . . d d d d . . . d . . . 
. . . d d . 5 5 5 5 . . d d . . . 
. . . . d 5 5 5 5 5 5 d d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 f f . . . . . . . 
. . . . . . f f . . . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . d 5 5 5 5 5 5 d . . . . . 
. . . d d . 5 5 5 5 . d . d . . . 
. . . d . . 5 5 5 5 . d d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 2 2 2 2 2 2 . . f 1 . 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . 1 1 
. . . . . 2 2 2 2 2 2 2 2 d . 1 1 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . d . 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 f f f . . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
let kays: Sprite = null
let kays_2: Sprite = null
let Carlos: Sprite = null
let Villan: Sprite = null
let kay_3: Sprite = null
main_character()
background()
bad_guy()
key_1()
key_2()
key_3()
Key_unlocks()
info.setScore(0)
info.setLife(5)
forever(function () {
	
})
