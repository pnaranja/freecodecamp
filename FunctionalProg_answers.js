{"answers":["function(console) {\n\tvar names = [\"Ben\", \"Jafar\", \"Matt\", \"Priya\", \"Brian\"],\n\t\tcounter;\n\n\tfor(counter = 0; counter < names.length; counter++) {\n\t\tconsole.log(names[counter]);\n\t}\n}\n\t\t","function(console) {\n\tvar names = [\"Ben\", \"Jafar\", \"Matt\", \"Priya\", \"Brian\"];\n\n\tnames.forEach(function(name) {\n\t\tconsole.log(name);\n\t});\n}\n\t\t","function() {\n\tvar newReleases = [\n\t\t{\n\t\t\t\"id\": 70111470,\n\t\t\t\"title\": \"Die Hard\",\n\t\t\t\"boxart\": \"http://cdn-0.nflximg.com/images/2891/DieHard.jpg\",\n\t\t\t\"uri\": \"http://api.netflix.com/catalog/titles/movies/70111470\",\n\t\t\t\"rating\": [4.0],\n\t\t\t\"bookmark\": []\n\t\t},\n\t\t{\n\t\t\t\"id\": 654356453,\n\t\t\t\"title\": \"Bad Boys\",\n\t\t\t\"boxart\": \"http://cdn-0.nflximg.com/images/2891/BadBoys.jpg\",\n\t\t\t\"uri\": \"http://api.netflix.com/catalog/titles/movies/70111470\",\n\t\t\t\"rating\": [5.0],\n\t\t\t\"bookmark\": [{ id:432534, time:65876586 }]\n\t\t},\n\...\"bookmark\": [{ id:432534, time:65876586 }]\n\t\t},\n\t\t{\n\t\t\t\"id\": 65432445,\n\t\t\t\"title\": \"The Chamber\",\n\t\t\t\"boxart\": \"http://cdn-0.nflximg.com/images/2891/TheChamber.jpg\",\n\t\t\t\"uri\": \"http://api.netflix.com/catalog/titles/movies/70111470\",\n\t\t\t\"rating\": 4.0,\n\t\t\t\"bookmark\": []\n\t\t},\n\t\t{\n\t\t\t\"id\": 675465,\n\t\t\t\"title\": \"Fracture\",\n\t\t\t\"boxart\": \"http://cdn-0.nflximg.com/images/2891/Fracture.jpg\",\n\t\t\t\"uri\": \"http://api.netflix.com/catalog/titles/movies/70111470\",\n\t\t\t\"rating\": 5.0,\n\t\t\t\"bookmark\": [{ id:432534, time:65876586 }]\n\t\t}\n\t],\n\tvideos = [];\n  \n  newReleases.forEach(function(obj){\n  \tif(obj.rating === 5.0)\n      videos.push(obj);\n  });\n\n\t// ------------ INSERT CODE HERE! -----------------------------------\n\t// Use forEach function to accumulate every video with a rating of 5.0\n\t// ------------ INSERT CODE HERE! -----------------------------------\n\n\treturn videos;\n}\n\t\t"]}
