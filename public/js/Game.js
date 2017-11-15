import Map from './Map'
import Cell from './Cell'
import Player from './Player'
import Fabric from 'fabric'

const fabric = Fabric.fabric


window.Game = {

    canvas: false,
    players: {},
    player: false,
    cells: [],

    init: function (map) {

        // canvas and fabric settings
        fabric.Object.prototype.hasControls = false
        fabric.Object.prototype.hasBorders = false
        fabric.Object.prototype.selectable = false
        fabric.Object.prototype.originX = 'center'
        fabric.Object.prototype.originY = 'center'

        this.canvas = new fabric.Canvas('canvas', {
            selection: false
        })

        for (let p of Map.players) {
            this.players[p.id] = p
            if (!!p.current) this.player = new Player(p)
        }
        for (let i in Map.cells) {
            let c = new Cell(i, Map.cells[i])
            c.id = i
            this.cells.push(c)
        }


    }
}

export default Game