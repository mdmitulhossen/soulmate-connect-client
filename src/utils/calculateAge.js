

export const calculateAge = (birthDate) => {

    if (!birthDate) {
        return 21;
    }
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();

    // Check if birthday has occurred this year
    if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}
