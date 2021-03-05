import { csvJSON, filterDataByText, filterWithinDistance } from './index.js'


csvJSON('./test.csv').then(function(text) {
    window.cat = text
    window.dog = filterDataByText(window.cat, 'Sun', 'Name')
    window.bird = filterWithinDistance(window.cat, 49.943282, -98.246317, 25)
});