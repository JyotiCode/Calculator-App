module.exports={
    
    maincontainer: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    // Display results
    main_screen: {
        elevation: 10,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',
        marginBottom: 10,
        padding: 10,
    },
    text: {
        fontSize: 50,
        textAlign: 'right',
        color:'black'
    },


    keypad: {
        width: '100%',
        height: '83%',
        display: 'flex',
        
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 30,
    },


    btn1: {
        width: 90,
        height: 90,
        backgroundColor: 'orange',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1: {
        backgroundColor: 'orange',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },

    btn2: {
        width: 90,
        height: 90,
        backgroundColor: 'grey',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
}