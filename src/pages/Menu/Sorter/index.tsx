import { useState } from "react";
import styles from "./Sorter.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
    sorter: string;
    setSorter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sorter({ sorter, setSorter }: Props) {
    const [opened, setOpened] = useState(false);
    const sorterName =
        sorter && options.find((option) => option.value === sorter)?.nome;
    return (
        <button
            className={classNames({
                [styles.sorter]: true,
                [styles["sorter--active"]]: sorter !== "",
            })}
            onClick={() => setOpened(!opened)}
            onBlur={() => setOpened(false)}
        >
            <span>{sorterName || "Ordenar por"}</span>
            {opened ? (
                <MdKeyboardArrowUp size={20} />
            ) : (
                <MdKeyboardArrowDown size={20} />
            )}
            <div
                className={classNames({
                    [styles.sorter__options]: true,
                    [styles["sorter__options--active"]]: opened,
                })}
            >
                {options.map((option) => (
                    <div
                        onClick={() => setSorter(option.value)}
                        className={styles.sorter__option}
                        key={option.value}
                    >
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}
