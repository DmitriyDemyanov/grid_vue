import db from '@/server/database';

console.log('->', db);

const x = db.getUser('c@d.gmail.com');
console.log('X', x);
