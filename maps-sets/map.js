function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Neto', 'Admin');
usuarios.set('José', 'User');
usuarios.set('Fernanda', 'Admin');

console.log(getAdmins(usuarios));