const recordMetadata = {
    name: 'name',
    email: 'email',
    website: 'url',
    amount: 'currency',
    phone: 'phoneNumber',
    closeAt: 'dateInFuture',
};

export default function fetchDataHelper({ amountOfRecords }) {
    return fetch('http://localhost:3000/hello', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }).then((response) => response.json());
}
