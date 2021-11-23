// import Item from "./Item";

function sort(state, by) {
    const tables = state.slice();
    switch (by) {
        case 'kilometres_asc':
            tables.sort((a, b) => {
                const total_ride_kilometresA = a.total_ride_kilometres.toUpperCase();
                const total_ride_kilometresB = b.total_ride_kilometres.toUpperCase();
                if (total_ride_kilometresA < total_ride_kilometresB) {
                    return -1;
                }
                if (total_ride_kilometresA > total_ride_kilometresB) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'kilometres_desc':
            tables.sort((a, b) => {
                const total_ride_kilometresA = a.total_ride_kilometres.toUpperCase();
                const total_ride_kilometresB = b.total_ride_kilometres.toUpperCase();
                if (total_ride_kilometresA < total_ride_kilometresB) {
                    return 1;
                }
                if (total_ride_kilometresA >total_ride_kilometresB) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'time_asc':
            tables.sort(function(a, b) {
                return a.last_use_time - b.last_use_time;
            });
            break;
        case 'time_desc':
            tables.sort(function(a, b) {
                return b.last_use_time - a.last_use_time;
            });
            break;
        default:
    }
    return tables
}
export default sort;