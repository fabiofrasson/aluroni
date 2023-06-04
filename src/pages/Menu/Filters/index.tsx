import filters from "./filters.json";
import styles from "./Filters.module.scss";

// Utilizar a primeira ocorrência do arquivo filters.json
// para delimitar o type
type IOption = (typeof filters)[0];

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

export default function Filters() {
    function selectFilter(option: IOption) {}
    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button
                    className={styles.filters__filter}
                    key={option.id}
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
