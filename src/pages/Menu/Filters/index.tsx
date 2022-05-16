import filters from './filters.json'

interface Option {
    id: number;
    label: string;
}

export default function Filters() {

    function selectFilter(option: Option) {
        console.log(option)
    }

    return (
        <div>
            {filters.map(option => (
                <button key={option.id} onClick={() => selectFilter(option)}>{ option.label }</button>
            ))}
        </div>
    )
}