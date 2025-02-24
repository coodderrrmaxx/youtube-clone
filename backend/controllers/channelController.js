import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  try {
    const { channelName, owner, description, channelBanner } = req.body;
    const newChannel = new Channel({ channelName, owner, description, channelBanner, subscribers: 0, videos: [] });
    await newChannel.save();
    res.status(201).json(newChannel);
  } catch (error) {
    res.status(500).json({ error: "Failed to create channel" });
  }
};

export const getChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(404).json({ error: "Channel not found" });
    res.json(channel);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch channel" });
  }
};
