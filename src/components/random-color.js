const AFRAME = globalThis.AFRAME;

if ( typeof AFRAME === "undefined" )
{
    throw new Error(
        "Component attempted to register before AFRAME was available."
    );
}

AFRAME.registerComponent( "random-color", {

    schema:
    {
        // NOTE: Time in milliseconds (ms).
        minimumInterval: { type: "number", default: 2000 }
    },

    init: function()
    {
        this.throttleTick();
    },

    update: function()
    {
        
    },

    tick: function()
    {
        this.el.setAttribute(
            "material",
            "color",
            `${ this.getRandomHexColor() }`
        );
    },

    remove: function()
    {
        
    },

    pause: function()
    {
        
    },

    play: function()
    {
        
    },

    throttleTick: function()
    {
        this.tick = AFRAME.utils.throttleTick(
            this.tick,
            this.data.minimumInterval,
            this
        );
    },

    getRandomHexColor: function()
    {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for ( let i = 0; i < 6; i++)
        {
            color += letters[ Math.floor( Math.random() * 16 ) ];
        }

        return color;
    }

} );