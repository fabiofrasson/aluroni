import filters from "./filters.json";
import styles from "./Filters.module.scss";
import classNames from "classnames";

// Utilizar a primeira ocorrência do arquivo filters.json
// para delimitar o type
type IOption = (typeof filters)[0];

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

/*
Utilizar interfaces
interface Opcao {
    id: number;
    label: string;
}

Ou definir o type como objeto
type Option = {
    id: number;
    label: string;
};
*/

export default function Filters({ filter, setFilter }: Props) {
    function selectFilter(option: IOption) {
        if (filter === option.id) return setFilter(null);
        return setFilter(option.id);
    }
    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button
                    className={classNames({
                        [styles.filters__filter]: true,
                        [styles["filters__filter--active"]]:
                            filter === option.id,
                    })}
                    key={option.id}
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
