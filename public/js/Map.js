// x : horizontal position (%)
// y : vertical position (%)
// r : radius (px)
// capacity : how many phages maximum
// population : !!!
// playerid : conquerer's id (false if unconquerd)
const Map = {
    players: [{
            id: 'p11111',
            name: 'mehdi',
            color: '#aa0000'
        },
        {
            current : true,
            id: 'p22222',
            name: 'akbar',
            color: '#009900'
        }
    ],
    cells: [{
            x: 20,
            y: 50,
            capacity: 100,
            population: 50,
            playerid: 'p11111'
        },
        {
            x: 35,
            y: 60,
            capacity: 50,
            population: 5,
            playerid: false            
        },
        {
            x: 35,
            y: 30,
            capacity: 50,
            population: 5,
            playerid: false            
        },
        {
            x: 55,
            y: 50,
            capacity: 150,
            population: 20,
            playerid: 'p22222' 
        },
        {
            x: 80,
            y: 50,
            capacity: 200,
            population: 20,
            playerid: 'p22222' 
        }
    ]
}
export default Map 