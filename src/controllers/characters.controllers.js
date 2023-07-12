import Character from "../model/character";

export const getCharacters = async (req, res) => {
  try {
    const character = await Character.find();
    res.status(200).json(character);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al buscar los personajes.",
    });
  }
};

export const getCharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    res.status(200).json(character);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al buscar el personaje.",
    });
  }
};

export const createCharacter = async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    res.status(201).json({
      mensaje: `El personaje '${newCharacter.name}' fue creado exitosamente.`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al crear el personaje.",
    });
  }
};

export const deleteCharacter = async (req, res) => {
  try {
    await Character.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El personaje fue eliminado exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al eliminar el personaje.",
    });
  }
};

export const updateCharacter = async (req, res) => {
  try {
    await Character.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El personaje fue actualizado exitosamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al editar el personaje.",
    });
  }
};
