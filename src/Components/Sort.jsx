function sort(state, by) {
    const table = state.slice();
    switch (by) {
        case 'total_ride_kilometres_asc':
            table.sort((a, b) => {
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
        case 'total_ride_kilometres_desc':
            table.sort((a, b) => {
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
        case 'last_use_time_asc':
            table.sort(function(a, b) {
                return a.last_use_time - b.last_use_time;
            });
            break;
        case 'last_use_time_desc':
            table.sort(function(a, b) {
                return b.last_use_time - a.last_use_time;
            });
            break;
        default:
    }
    return table
}
export default sort;