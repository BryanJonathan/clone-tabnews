function status (req, res) {
  res.status(200).json({
    message: "status"
  }); 
}

export default status;