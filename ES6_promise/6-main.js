import handleProfileSignup from './6-final-user';

async function test() {
  console.log(await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
}

test();
