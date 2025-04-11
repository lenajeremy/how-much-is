import { PrismaClient } from '../app/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // --- States ---
  const lagosState = await prisma.state.upsert({
    where: { name: 'Lagos' },
    update: {},
    create: { name: 'Lagos' },
  });
  const abujaState = await prisma.state.upsert({
    where: { name: 'FCT - Abuja' },
    update: {},
    create: { name: 'FCT - Abuja' },
  });
  const riversState = await prisma.state.upsert({
    where: { name: 'Rivers' },
    update: {},
    create: { name: 'Rivers' },
  });
  const oyoState = await prisma.state.upsert({
    where: { name: 'Oyo' },
    update: {},
    create: { name: 'Oyo' },
  });
  console.log('Seeded States');

  // --- Cities (with approximate coordinates for REQ-07) ---
  const ikejaCity = await prisma.city.upsert({
    where: { name_stateId: { name: 'Ikeja', stateId: lagosState.id } },
    update: { latitude: 6.6211, longitude: 3.3441 },
    create: {
      name: 'Ikeja',
      latitude: 6.6211,
      longitude: 3.3441,
      stateId: lagosState.id,
    },
  });
  const wuseCity = await prisma.city.upsert({
    where: { name_stateId: { name: 'Wuse', stateId: abujaState.id } },
    update: { latitude: 9.0765, longitude: 7.4906 },
    create: {
      name: 'Wuse',
      latitude: 9.0765,
      longitude: 7.4906,
      stateId: abujaState.id,
    },
  });
  const phCity = await prisma.city.upsert({
    where: { name_stateId: { name: 'Port Harcourt', stateId: riversState.id } },
    update: { latitude: 4.8156, longitude: 7.0498 },
    create: {
      name: 'Port Harcourt',
      latitude: 4.8156,
      longitude: 7.0498,
      stateId: riversState.id,
    },
  });
  const ibadanCity = await prisma.city.upsert({
    where: { name_stateId: { name: 'Ibadan', stateId: oyoState.id } },
    update: { latitude: 7.3776, longitude: 3.9470 },
    create: {
      name: 'Ibadan',
      latitude: 7.3776,
      longitude: 3.9470,
      stateId: oyoState.id,
    },
  });
  console.log('Seeded Cities');

  // --- Markets ---
  const computerVillage = await prisma.market.upsert({
      where: { name_cityId: { name: 'Computer Village', cityId: ikejaCity.id } },
      update: {},
      create: { name: 'Computer Village', cityId: ikejaCity.id },
  });
  const wuseMarket = await prisma.market.upsert({
      where: { name_cityId: { name: 'Wuse Market', cityId: wuseCity.id } },
      update: {},
      create: { name: 'Wuse Market', cityId: wuseCity.id },
  });
  const mile1Market = await prisma.market.upsert({
      where: { name_cityId: { name: 'Mile 1 Market', cityId: phCity.id } },
      update: {},
      create: { name: 'Mile 1 Market', cityId: phCity.id },
  });
   const bodijaMarket = await prisma.market.upsert({
      where: { name_cityId: { name: 'Bodija Market', cityId: ibadanCity.id } },
      update: {},
      create: { name: 'Bodija Market', cityId: ibadanCity.id },
  });
  console.log('Seeded Markets');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
