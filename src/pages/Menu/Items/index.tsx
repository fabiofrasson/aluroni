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

    function sort(list: typeof menu) {
        switch (sorter) {
            case "porcao":
                return list.sort((a, b) => (a.size > b.size ? 1 : -1));
            case "qtd_pessoas":
                return list.sort((a, b) => (a.serving > b.serving ? 1 : -1));
            case "preco":
                return list.sort((a, b) => (a.price > b.price ? 1 : -1));
            default:
                return list;
        }
    }

    useEffect(() => {
        const newList = menu.filter(
            (item) => searchTest(item.title) && filterTest(item.category.id)
        );
        setList(sort(newList));
    }, [search, filter, sorter]);

    return (
        <div className={styles.items}>
            {list.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}
