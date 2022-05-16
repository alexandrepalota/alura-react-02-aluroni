import filters from './filters.json'

type IOption = typeof filters[0]

export default function Filters() {

    function selectFilter(option: IOption) {
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