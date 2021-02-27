class Artist {
    constructor(label, name){
        this.label = label; 
        this.name = name;
        
        
    }
    describe() {
        return ` ${this.name} belongs to the label ${this.label}.`;
        
    }
    
    }


class Labels { 
    constructor(name){  
        this.artists = [];
        this.name = name;
        
        
    }
    
    addArtist(artist) {
        if (artist instanceof Artist) {
            this.artists.push(artist);
        } else {
            throw new Error('You can only add an instance of Artist. Entry is not an Artist.'); 
        }
    }
    describe() {
        return `${this.name} has ${this.artists.length} artists`
    }
}


class Menu {
    constructor() {
        this.labels = []
        this.selectedLabel = null;
    
    }
    start() {
        let selection = this.showMainMenuOptions();

        while(selection !=0){
            switch (selection){
                case '1' :
                    this.createLabel();
                    break
                case '2' :
                    this.viewLabel();
                    break
                case '3' :
                    this.deleteLabel();
                    break
                case '4' :
                    this.displayLabels()
                    break
                default :
                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('See ya around...');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create a new label (you sure you have what it takes?)
        2) view an existing label (check them out!)
        3) not satisfied with the label you built? delete it here
        4) look at all the labels you've created
        `)
    }
    showLabelMenuOptions(artist){
        return prompt(`
        0) back
        1) create artist
        2) delete artist
        ~~~~~~~~~~~~~~~~~~~~~~~
        ${artist}
    `);
    }



    displayLabels(){
        let labelString = '';
        for (let i = 0; i < this.labels.length; i++){
            labelString += i + ') ' + this.labels[i].name + '\n';

        }
        alert(labelString);
    }
    createLabel(){
        let name = prompt('Enter the name of your new label: ');
        this.labels.push(new Labels(name));

    }
    
   

    viewLabel(){
        let index = prompt('Enter the number of the label you want to look at: ');
        if (index > -1 && index < this.labels.length){
            this.selectedLabel = this.labels[index];
            let description = 'Label Name: ' + this.selectedLabel.name + '\n';
            
            for(let i = 0; i< this.selectedLabel.artists.length; i++){
                description += i + ') ' + this.selectedLabel.artists[i].name + ' - ' + this.selectedLabel.artists[i].label + '\n';
            }

            let selection = this.showLabelMenuOptions(description);
            switch (selection){
                case '1':
                    this.createArtist();
                break
                case '2' :
                    this.deleteArtist();
            }
            }
        }
        deleteLabel(){
            let index = prompt('Enter the number of the label you want to cancel: ');
            if(index > -1 && index < this.labels.length){
                this.labels.splice(index, 1);
            }
        }

        createArtist(){
            let name = prompt ('Enter name for new artist');
            this.selectedLabel.artists.push(new Artist (name));
        }
        deleteArtist(){
            let index = prompt('Enter the number of the artist you want to cancel:');
            if (index > -1 && index < this.selectedLabel.artists.length){
                this.selectedLabel.artists.splice(index, 1);

            }
        }
    }

let menu = new Menu();
menu.start();