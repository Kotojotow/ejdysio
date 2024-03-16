const DodajPracownika = ({ onAdd }) => {
    const handleSubmit = () => {
        // Załóżmy, że pracownikData to dane zebrane z formularza
        const pracownikData = { imie: 'Jan', nazwisko: 'Kowalski' };
        onAdd(pracownikData); // Wywołuje funkcję przekazaną przez props
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Pola formularza */}
            <button type="submit">Dodaj</button>
        </form>
    );
};

export default DodajPracownika;