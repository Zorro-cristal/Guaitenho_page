import './menu_item.css'

export const Menu_item= ({titulo}) => {
    const link= "https://www.google.com.py";
    
    return (
        <li>
            <a href={link}>{titulo}</a>
        </li>
    );
}