import { users } from './users';
import { products } from './products';

/* Import models needed for loading sample data */
import User from '../src/models/User';
import Product from '../src/models/Product';

import { init } from '../src/utils/database';
init();

async function deleteData() {
  console.log('😢 Goodbye data...');
  await User.deleteMany();
  await Product.deleteMany();
  console.log('Data deleted');
  process.exit();
}

async function loadData() {
  try {
    const [adminUser] = await User.insertMany(users);

    /* Add all products as admin user */
    const productsWithUser = products.map((product) => ({
      ...product,
      user: adminUser._id,
    }));
    await Product.insertMany(productsWithUser);
    console.log('👍 - Data inserted!');
    process.exit();
  } catch (error) {
    console.log('\n 👎 - Error inserting the data');
    console.log(error);
    process.exit(1);
  }
}

if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}
