import React,{Component} from 'react'
import {Button,Dropdown,Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {routes} from "../routing"

export default function Navi() {
    return (
        <div>
             
      <Menu size="massive">
        
        {routes.map(route=> (
            <Menu.Item key={route.title} name = {route.title}> <Link to = {route.path}>{route.title}</Link> </Menu.Item>
        ) ) }
        
        

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>İş Elanları</Dropdown.Item>
              <Dropdown.Item>Açıq CV'ler</Dropdown.Item>
              <Dropdown.Item>İşlər</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

        </div>
    )
}
