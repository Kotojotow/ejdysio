import React, { useState } from 'react';
import DodajPracownika from './grafikApp/DodajPracownika';
import UstawieniaGrafiku from './grafikApp/UstawieniaGrafiku';

const GrafikApp = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        pracownicy: [],
        ustawienia: {}
    });

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handlePracownikSubmit = (pracownikData) => {
        setFormData({
            ...formData,
            pracownicy: [...formData.pracownicy, pracownikData]
        });
        nextStep(); // Przejdź do następnego kroku po dodaniu pracownika
    };

    const handleUstawieniaSubmit = (ustawieniaData) => {
        setFormData({
            ...formData,
            ustawienia: ustawieniaData
        });
        nextStep(); // Może to być podsumowanie lub generowanie grafiku
    };

    switch (currentStep) {
        case 1:
            return <DodajPracownika onAdd={handlePracownikSubmit} />;
        case 2:
            return <UstawieniaGrafiku onSettings={handleUstawieniaSubmit} />;
        default:
            return <div>Podsumowanie lub dalsze kroki</div>;
    }
};

export default GrafikApp;