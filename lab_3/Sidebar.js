import {useNavigate, useLocation} from 'react-router-dom'
import React from 'react'

function Sidebar(){
    const navigate = useNavigate()
    const location = useLocation()
    const handleClick = (path) =>{
        return (location.pathname === path);
    };
    return(
    <div class="navigation">
        <button type="button" class="btn-new" onClick={() => navigate('/intro')} style={{ color: handleClick('/intro') ? "#5B7065" : "#C9D1C8" }}><span>Введение</span></button> 
        <button type="button" class="btn-new" onClick={() => navigate('/main')} style={{ color: handleClick('/main') ? "#5B7065" : "#C9D1C8" }}><span>Описание</span></button>
        <button type="button" class="btn-new" onClick={() => navigate('/post')} style={{ color: handleClick('/post') ? "#5B7065" : "#C9D1C8" }}><span>Посты</span></button>
        <button type="button" class="btn-new" onClick={() => navigate('/end')} style={{ color: handleClick('/end') ? "#5B7065" : "#C9D1C8" }}><span>Заключение</span></button>
    </div>
    )
}
export default Sidebar;
