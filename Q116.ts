// Question16:Create a switch case that matches several cases to the same code block, representing seasons
function monthOFSeason(monthNumber:number){
    switch(monthNumber){
        case 12:
            case 1:
                case 2:
                    console.log("winter");
                    break;
                    case 3:
                        case 4:
                            case 5:
                                console.log("Spring");
                                break;
                                case 6:
                                    case 7:
                                        case 8:
                                            console.log("Summer");
                                            break;
                                            case 9:
                                                case 10:
                                                    case 11:
                                                        console.log("Autumn");
                                                        break;
                                                        
                                                        default:
                                                            console.log("Invalid Month number");
                                                            break;
    }
}
monthOFSeason(2);
monthOFSeason(13);
monthOFSeason(5);