import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, filter: "blur(8px)", transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const DrawerModal = ({ isOpen, onClose, selectedItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedDips, setSelectedDips] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleChipSelect = (item, setSelected) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const clearSelectedChips = (setSelected) => {
    setSelected([]);
  };

  const handleSendInstructions = () => {
    console.log("Special Instructions:", instructions);
    alert("Special instructions sent!");
    setInstructions("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-md"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
className="fixed 
              top-32 sm:top-16 
              md:top-0 right-0 
              w-full max-w-md 
              h-[calc(100%-8rem)] sm:h-[calc(100%-4rem)] 
              md:h-full 
              bg-white shadow-xl 
              z-50 rounded-t-xl 
              md:rounded-none 
              overflow-hidden"            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="h-full flex flex-col">
              {/* Sticky Header */}
              <motion.div
                className="sticky top-0 bg-white px-4 py-5 shadow-sm z-10 text-center border-b border-gray-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{selectedItem?.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedItem?.description}</p>
                <p className="text-green-600 font-medium mt-1">{selectedItem?.rating} ⭐ • 30 min</p>
                <motion.button
                  className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
                  onClick={onClose}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✕
                </motion.button>
              </motion.div>

              {/* Content */}
              <motion.div
                className="px-4 py-6 flex-1 overflow-y-scroll no-scrollbar"
                initial="hidden"
                animate="visible"
              >
                {/* Toppings */}
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">Choose your Toppings</h4>
                  <p className="text-sm text-gray-500 mb-3">Select up to 2 toppings.</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem?.toppings?.map((topping, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={chipVariants}
                        initial="hidden"
                        animate="visible"
                        className={`inline-flex items-center px-2 py-1 text-sm rounded border transition cursor-pointer ${
                          selectedToppings.includes(topping)
                            ? "bg-primary text-white border-primary"
                            : "bg-gray-100 text-gray-800 border-gray-300"
                        }`}
                        onClick={() => handleChipSelect(topping, setSelectedToppings)}
                      >
                        <span>{topping}</span>
                        {!selectedToppings.includes(topping) && (
                          <FaPlus className="ml-2 text-xs text-gray-500" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  {selectedToppings.length > 0 && (
                    <div className="flex items-center text-sm flex-wrap gap-2 mt-4">
                      {selectedToppings.map((topping, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-red-100 text-primary px-2 py-1 rounded-full"
                        >
                          {topping}
                          <FaTimes
                            className="ml-1 cursor-pointer"
                            onClick={() =>
                              setSelectedToppings((prev) =>
                                prev.filter((item) => item !== topping)
                              )
                            }
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => clearSelectedChips(setSelectedToppings)}
                        className="text-primary underline text-sm"
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>

                {/* Dips */}
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">Choose your Dip</h4>
                  <p className="text-sm text-gray-500 mb-3">Select 1 dip for your meal.</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem?.dips?.map((dip, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={chipVariants}
                        initial="hidden"
                        animate="visible"
                        className={`inline-flex text-sm items-center px-2 py-1 rounded border transition cursor-pointer ${
                          selectedDips.includes(dip)
                            ? "bg-primary text-white border-primary"
                            : "bg-gray-100 text-gray-800 border-gray-300"
                        }`}
                        onClick={() => handleChipSelect(dip, setSelectedDips)}
                      >
                        <span>{dip}</span>
                        {!selectedDips.includes(dip) && (
                          <FaPlus className="ml-2 text-xs text-gray-500" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  {selectedDips.length > 0 && (
                    <div className="flex items-center text-sm flex-wrap gap-2 mt-4">
                      {selectedDips.map((dip, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-red-100 text-primary px-2 py-1 rounded-full"
                        >
                          {dip}
                          <FaTimes
                            className="ml-1 cursor-pointer"
                            onClick={() =>
                              setSelectedDips((prev) =>
                                prev.filter((item) => item !== dip)
                              )
                            }
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => clearSelectedChips(setSelectedDips)}
                        className="text-primary underline text-sm"
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>

                {/* Drinks */}
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">Choose your Drink</h4>
                  <p className="text-sm text-gray-500 mb-3">Select 1 drink for your meal.</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem?.drinks?.map((drink, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={chipVariants}
                        initial="hidden"
                        animate="visible"
                        className={`inline-flex text-sm items-center px-2 py-1 rounded border transition cursor-pointer ${
                          selectedDrinks.includes(drink)
                            ? "bg-primary text-white border-primary"
                            : "bg-gray-100 text-gray-800 border-gray-300"
                        }`}
                        onClick={() => handleChipSelect(drink, setSelectedDrinks)}
                      >
                        <span>{drink}</span>
                        {!selectedDrinks.includes(drink) && (
                          <FaPlus className="ml-2 text-xs text-gray-500" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  {selectedDrinks.length > 0 && (
                    <div className="flex items-center text-sm flex-wrap gap-2 mt-4">
                      {selectedDrinks.map((drink, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-red-100 text-primary px-2 py-1 rounded-full"
                        >
                          {drink}
                          <FaTimes
                            className="ml-1 cursor-pointer"
                            onClick={() =>
                              setSelectedDrinks((prev) =>
                                prev.filter((item) => item !== drink)
                              )
                            }
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => clearSelectedChips(setSelectedDrinks)}
                        className="text-primary underline text-sm"
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>

                {/* Notes Section */}
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">Special Instructions</h4>
                  <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Add any notes for the chef (e.g., allergies, preferences)."
                    className="w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 focus:border-primary focus:ring-primary focus:outline-none transition"
                    rows="3"
                  ></textarea>
                  
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="flex items-center justify-between border-t border-gray-200 px-4 py-3"
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => handleQuantityChange("decrement")}
                    className="w-8 h-8 bg-primary text-white rounded-full shadow-md flex items-center justify-center hover:bg-opacity-90 transition-transform active:scale-95"
                    variants={buttonVariants}
                  >
                    <FaMinus size={12} />
                  </motion.button>

                  <motion.span
                    className="px-3 py-1 text-base font-medium text-gray-800 bg-gray-100 rounded-md border border-gray-300"
                    variants={chipVariants}
                  >
                    {quantity}
                  </motion.span>

                  <motion.button
                    onClick={() => handleQuantityChange("increment")}
                    className="w-8 h-8 bg-primary text-white rounded-full shadow-md flex items-center justify-center hover:bg-opacity-90 transition-transform active:scale-95"
                    variants={buttonVariants}
                  >
                    <FaPlus size={12} />
                  </motion.button>
                </div>

                <motion.button
                  className="bg-primary text-white px-2 md:px-5 py-3 rounded-lg font-bold text-sm hover:bg-opacity-90 shadow-lg transition"
                  onClick={onClose}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Add to Cart • £{(parseFloat(selectedItem?.price.replace("£", "")) * quantity).toFixed(2)}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DrawerModal;