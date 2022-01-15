import React, {useEffect, useState} from 'react';
import Login from '../screens/login';
import Content2 from '../screens/content2';
import Marketplace from '../screens/marketplace';
import Marketplace_item_Owner from "../screens/marketplace_item_Owner"
import AppDrawer from '../screens/appDrawer';
import Page from '../screens/page';
import SignUp from '../screens/signup';
import Account from '../screens/account';


const screens = () => {
    const [valu,setValu] = useState("");
    const [state, setState] = useState({
        err: "",
        page: valu.length>0?2:0,
        formdata: [],
        currentItem: "".toLowerCase(),
        category: [],
        currentUser: "",
        itemOwner: "", // email of item owner
        currentCategory: "",
        currentDescription: "",
        currentPrice: "",
    })

    
  

    function online() {
        switch (state.page) {
            case 0:
                return <Login state={state}
                    setState={setState}/>
            case 1:
                return <SignUp state={state}
                    setState={setState}/>
            case 2:
                return <Content2 state={state}
                    setState={setState}/>
            case 3:
                return <Marketplace state={state}
                    setState={setState}/>
            case 4:
                return <AppDrawer state={state}
                    setState={setState}/>
            case 5:
                return <Account state={state}
                    setState={setState}/>
            case 6:
                return <Marketplace_item_Owner state={state}
                    setState={setState}/>
            case 7:
                return <Page state={state}
                    setState={setState}/>


        }
    }
    return online()
};

 
export default screens;
