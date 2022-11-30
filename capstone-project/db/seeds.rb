
User.destroy_all
Item.destroy_all
Review.destroy_all
CartItem.destroy_all
puts "Seeding..."

#user seeds
u = User.create!(username: "sumo", password: "123abc!")

#item seeds
Item.create(name: "Bape watch", description: "Stylish watch from Bape, that shows all hypebeasts how cool you are", price: 795.00, image: "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXWHM187003JBLX/0ZXWHM187003JBLX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80", category: "watch")

#review seeds

puts "Done Seeding!"