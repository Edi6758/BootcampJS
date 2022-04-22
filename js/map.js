function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin');
usuarios.set('Carlos', 'Admin');
usuarios.set('Amanada', 'User');
usuarios.set('Davi', 'Admin');
usuarios.set('Edi', 'Admin');

console.log(getAdmins(usuarios))