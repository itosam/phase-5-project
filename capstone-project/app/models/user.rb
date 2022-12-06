class User < ApplicationRecord

    has_many :cart_items
    has_many :items, through: :cart_items

    has_many :reviews
    has_many :items, through: :reviews
    
    has_secure_password

    validates :username, presence: true
    validates_uniqueness_of :username, :case_sensitive => false
    validates :password, presence: true, length: {minimum: 5}

end
