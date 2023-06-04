import menu from "./items.json";
import Item from "./Item";
import styles from "./Items.module.scss";
import { useEffect, useState } from "react";

interface Props {
    search: string;
    filter: number | null;
    sorter: string;
}

export default function Items({ search, filter, sorter }: Props) {
    const [list, setList] = useState(menu);

    function searchTest(title: string) {
        const regex = new RegExp(search, "i");
        return regex.test(title);
    }

    function filterTest(id: number) {
        if (filter !== null) return filter === id;
        return true;
    }

    useEffect(() => {
        const newList = menu.filter(
            (item) => searchTest(item.title) && filterTest(item.category.id)
        );
        setList(newList);
    }, [search, filter]);

    return (
        <div className={styles.items}>
            {list.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}
