import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import Menuitem from './MenuItem';

function Menu() {
  // const menu = useLoaderData();
  const menu = useLoaderData();
  return (
    <ul className="mb-20 divide-y divide-stone-200 px-2 ">
      {menu.map((pizza) => (
        <Menuitem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
