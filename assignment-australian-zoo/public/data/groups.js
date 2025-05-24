function Group(type, imageFilepath) {
    this.type = type;
    this.imageFilepath = imageFilepath;
}

const groups = [
    new Group(
        "Mammals",
        "/img/groups/group_mammals.png"
    ),
    new Group(
        "Reptiles",
        "/img/groups/group_reptiles.png"
    ),
    new Group(
        "Birds",
        "/img/groups/group_birds.png"
    )
]

export { groups };