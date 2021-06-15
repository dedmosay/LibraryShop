import React from "react";
import { Menu, RevealContent } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const MenuComponent = () => {
    return (
        <div>
            <Menu>
                <Menu.Item
                    name='browse'
                >
                    Магазин книг
                </Menu.Item>


                <Menu.Menu position='right'>
                    <Menu.Item
                        name='signup'
                    >
                        Итого: &nbsp; <b>0</b> &nbsp; руб.
                    </Menu.Item>

                    <Menu.Item
                        name='help'
                    >
                        Корзина &nbsp;(<b>0</b>)
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
};

export default MenuComponent