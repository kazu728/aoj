import { excute } from './queue';

const input = `5 100 
p1 150
p2 80
p3 200
p4 350
p5 20`;

excute(input);

test('should be less than memory limit', () => {
  excute(input);
});
