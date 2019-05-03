const yargs = require('yargs');
const fs = require('fs');

const argv = yargs
    .command('add','add notes',{
        builder: {
            title: {
                describe: 'Title of note',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            console.log('Title: ' + argv.title)
            console.log('Body: ' + argv.body)
        }
    });

const book = argv;
const bookJSON = JSON.stringify(book);
//console.log(bookJSON);

//Add
if(process.argv[2]=='add') {
    const data = argv.title;
    fs.writeFile("E:\\data\\node-data.txt", bookJSON, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was created and saved...");
        console.log(bookJSON);
    });
}
//Read
else if(process.argv[2]=='read') {
    const data =
    fs.readFileSync("E:\\data\\node-data.txt", "utf8");

    console.log("Reading file...");
    console.log(JSON.parse(data));
}
//Update
else if(process.argv[2]=='update') {
    const read1 =
    fs.readFile("E:\\data\\node-data.txt", 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        ///abdul rauf/g
        //let result = read1.replace("abdulraufarif", 'aaaa');
        const updatedata =
        fs.writeFile("E:\\data\\node-data.txt", bookJSON, 'utf8', function (err) {
            if (err) return console.log(err);
            console.log('File updated...');
        });
    });
}
//Delete
else if(process.argv[2]=='delete') {
    fs.unlink('E:\\data\\node-data.txt', function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted...');
    });
}