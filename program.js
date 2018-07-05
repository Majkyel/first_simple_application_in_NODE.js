process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (!input) {return;}
    var instruction = input.toString().trim();
    switch (instruction) {
        case '/exit':
            process.stdout.write('Quiting app!\n');
            process.exit();
            break;
        case '/versions':
            console.log(process.versions);
            break;
        case '/system_language':
            console.log(process.env);
            break;
        default:
            process.stderr.write('Wrong instruction!\n');
    }
})
